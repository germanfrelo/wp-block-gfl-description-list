import { registerBlockType } from "@wordpress/blocks";
import { dlIcon } from "../icons.js";
import metadata from "./block.json";
import Edit from "./edit.js";
import "./editor.css";
import Save from "./save.js";
import "./style.css";

const customSVGIcon = dlIcon;

registerBlockType(metadata.name, {
	...metadata,
	icon: customSVGIcon || metadata.icon,
	edit: Edit,
	save: Save,
});
