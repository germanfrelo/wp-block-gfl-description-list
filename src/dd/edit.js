import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

// By NOT defining allowedBlocks, we allow all "Flow Content" (Core blocks)
const TEMPLATE = [["core/paragraph", { placeholder: "Description…" }]];

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();

	return (
		<dd {...blockProps}>
			<InnerBlocks template={TEMPLATE} />
		</dd>
	);
}
