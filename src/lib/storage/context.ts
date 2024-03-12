// credit: https://blog.skk.moe/post/context-in-javascript/

import { cacheExchange, Client, fetchExchange } from '@urql/core'
import type { Contract, Indexer } from 'crossbell'
import { createContract, createIndexer } from 'crossbell'

const NO_VALUE_DEFAULT = Symbol('NO_VALUE_DEFAULT')
type ContextValue<T> = T | typeof NO_VALUE_DEFAULT

export function createContext<T>(defaultValue: ContextValue<T> = NO_VALUE_DEFAULT) {
  let contextValue: ContextValue<T> = defaultValue

  const Provider = (value: T, callback: () => void) => {
    const currentValue: ContextValue<T> = contextValue
    contextValue = value
    callback()
    contextValue = currentValue
  }

  const Consumer = (): T => {
    // 只有当 Consumer 没有在 Provider 的作用域之内调用、且 Context 本身没有提供默认值时，
    // contextValue 才会是 NO_VALUE_DEFAULT 的 Symbol，此时我们可以抛出一个 TypeError
    if (contextValue === NO_VALUE_DEFAULT)
      throw new TypeError('You should only use useContext inside a Provider, or provide a default value!')

    // 由于 contextValue 的类型是 T | typeof NO_VALUE_DEFAULT，而我们在之前的 type guard 中
    // narrow 掉了 typeof NO_VALUE_DEFAULT，所以这里的 contextValue 的类型一定是 T
    return contextValue
  }

  return {
    Provider,
    Consumer,
  }
}

export function useContext<T>(contextRef: ReturnType<typeof createContext<T>>) {
  return contextRef.Consumer()
}

const indexer = createIndexer()

const client = new Client({
  url: 'https://indexer.crossbell.io/v1/graphql',
  exchanges: [cacheExchange, fetchExchange],
})

const contract = createContract()

export type ClientContextType = {
  client: Client
  indexer: Indexer
  contract: Contract
  xLogBase: string
}

export const ClientContext = createContext<ClientContextType>({
  client,
  indexer,
  contract,
  xLogBase: 'xlog.app',
})
