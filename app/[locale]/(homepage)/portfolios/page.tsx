import { env } from "../../../../env";
import { client } from "../../../../lib/client";
import { ListItem } from "../../list-item";
import { capitalize, getSuperscript } from "../../utils";

export default async function HomePage() {
	const portfolios = await client.portfolio.getAll(env.HANDLE);

	return (
		<>
			{portfolios.map((portfolio) => (
				<ListItem
					key={portfolio.noteId}
					title={capitalize(portfolio.title)}
					description={portfolio.summary}
					link={portfolio.link}
					superscript={getSuperscript(portfolio)}
				/>
			))}
		</>
	);
}
