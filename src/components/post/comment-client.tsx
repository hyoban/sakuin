"use client";
import { useOptimistic, useRef } from "react";
import type { Comment } from "sakuin";

import { AppLink } from "~/app/[locale]/external-link";

import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { createComment } from "./comment-action";
import { SubmitButton } from "./submit-button";

export function CommentListClient({
	comments,
	noteId,
}: {
	comments: Comment[];
	noteId: number;
}) {
	const [optimisticComments, addOptimisticComment] = useOptimistic<
		Comment[],
		Comment
	>(comments, (state, newComment) => [newComment, ...state]);

	return (
		<>
			{optimisticComments.length > 0 && (
				<ul>
					{optimisticComments.map((comment) => (
						<CommentView key={comment.noteId} comment={comment} />
					))}
				</ul>
			)}
			<CommentForm
				noteId={noteId}
				addOptimisticComment={addOptimisticComment}
			/>
		</>
	);
}

function CommentView({ comment }: { comment: Comment }) {
	return (
		<li>
			<p>
				<AppLink href={comment.url} className="font-bold">
					{comment.name}
				</AppLink>{" "}
				: {comment.content}
				{comment.likes > 0 && (
					<>
						{" "}
						<span className="i-lucide-thumbs-up text-xs align-baseline" />{" "}
						{comment.likes}
					</>
				)}
			</p>
			<ul>
				{comment.replies.map((reply) => (
					<CommentView key={reply.noteId} comment={reply} />
				))}
			</ul>
		</li>
	);
}

function CommentForm({
	noteId,
	addOptimisticComment,
}: {
	noteId: number;
	addOptimisticComment: (comment: Comment) => void;
}) {
	const ref = useRef<HTMLFormElement>(null);
	return (
		<>
			<p className="text-sm opacity-80">
				Comment send here will be anonymous, you can login your account in xLog
				and comment there.
			</p>
			<form
				ref={ref}
				action={async (formData: FormData) => {
					ref.current?.reset();

					addOptimisticComment({
						content: formData.get("content") as string,
						email: formData.get("email") as string,
						name: formData.get("name") as string,
						url: formData.get("url") as string,
						targetNoteId: 0,
						targetCharacterId: 0,
						replies: [],
						characterId: 0,
						noteId: 0,
						uri: "",
						createdAt: new Date().toISOString(),
						updatedAt: new Date().toISOString(),
						publishedAt: new Date().toISOString(),
						deletedAt: null,
						comments: 0,
						views: 0,
						likes: 0,
						tips: 0,
					});
					await createComment(formData);
				}}
				className="flex flex-col gap-4"
			>
				<input type="hidden" name="noteId" value={noteId} />
				<section className="flex flex-wrap gap-4">
					<section>
						<Label htmlFor="name">Name</Label>
						<Input id="name" name="name" required />
					</section>
					<section>
						<Label htmlFor="email">Email</Label>
						<Input id="email" name="email" type="email" required />
					</section>
					<section>
						<Label htmlFor="url">Website</Label>
						<Input id="url" name="url" type="url" />
					</section>
				</section>
				<Label htmlFor="content">Comment</Label>
				<Textarea id="content" name="content" required />
				<SubmitButton />
			</form>
		</>
	);
}
