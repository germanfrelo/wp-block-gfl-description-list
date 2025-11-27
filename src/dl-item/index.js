import { registerBlockType } from "@wordpress/blocks";
import { dlItemIcon } from "../icons.js";
import metadata from "./block.json";
import Edit from "./edit.js";
import "./editor.css";
import Save from "./save.js";
import "./style.css";

const customSVGIcon = dlItemIcon;

registerBlockType(metadata.name, {
	...metadata,
	icon: customSVGIcon || metadata.icon,
	edit: Edit,
	save: Save,
});
