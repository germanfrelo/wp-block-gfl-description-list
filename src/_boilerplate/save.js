import { RichText, useBlockProps } from "@wordpress/block-editor";

export default function Save({ attributes }) {
	const saveBlockProps = useBlockProps.save();

	// Uses <RichText.Content /> to render the raw HTML saved from the editor (e.g., <strong>, <a> tags).
	return (
		<RichText.Content
			{...saveBlockProps}
			tagName="p"
			value={attributes.content}
		/>
	);
}
