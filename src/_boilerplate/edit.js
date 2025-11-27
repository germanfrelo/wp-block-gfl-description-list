import { RichText, useBlockProps } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

export default function Edit({ attributes, setAttributes }) {
	const { content } = attributes;

	// Get the block's wrapper properties
	const blockProps = useBlockProps();

	return (
		<RichText
			{...blockProps}
			tagName="p"
			value={content}
			onChange={(newContent) => setAttributes({ content: newContent })}
			placeholder={__("Type the text here…", "plugin-slug")}
		/>
	);
}
