import { InnerBlocks, RichText, useBlockProps } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import "./editor.css"; // Ensure you add some dashed borders here for visibility

const ALLOWED_BLOCKS = ["gfl/dd"];
const TEMPLATE = [["gfl/dd", {}]];

export default function Edit({ attributes, setAttributes }) {
	const { term } = attributes;
	const blockProps = useBlockProps();

	return (
		<div {...blockProps}>
			{/* The Fixed DT */}
			<RichText
				tagName="dt"
				value={term}
				onChange={(value) => setAttributes({ term: value })}
				placeholder={__("Term…", "gfl-block-description-list")}
				allowedFormats={["core/bold", "core/code", "core/italic"]} // Restrict formatting if needed
			/>

			{/* The Flexible DDs */}
			<InnerBlocks
				allowedBlocks={ALLOWED_BLOCKS}
				template={TEMPLATE}
			/>
		</div>
	);
}
