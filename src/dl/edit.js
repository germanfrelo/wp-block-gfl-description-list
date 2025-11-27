import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

const ALLOWED_BLOCKS = ["gfl/dl-item"];
const TEMPLATE = [["gfl/dl-item", {}]];

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();

	return (
		<dl {...blockProps}>
			<InnerBlocks
				allowedBlocks={ALLOWED_BLOCKS}
				template={TEMPLATE}
			/>
		</dl>
	);
}
