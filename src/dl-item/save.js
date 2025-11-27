import { InnerBlocks, RichText, useBlockProps } from "@wordpress/block-editor";

export default function Save({ attributes }) {
	const { term } = attributes;
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<RichText.Content
				tagName="dt"
				value={term}
			/>
			<InnerBlocks.Content />
		</div>
	);
}
