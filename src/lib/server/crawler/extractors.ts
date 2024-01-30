import {removeTrailingSlashes} from "../../index";

export function extractName(input) {
	const regex = /\[([^\]]+)\]\(/;
	const match = input.match(regex);
	return match ? match[1].trim() : null;
}

export function extractPrimaryUrl(input) {
	const regex = /\((https?:\/\/[^)]+)\)/;
	const match = input.match(regex);
	return match ? removeTrailingSlashes(match[1].trim()) : null;
}

export function extractDescription(input) {
	const regex = /-\s*\[(?:[^\]]+)\]\([^)]+\)\s*-\s*(.+?)(?:\s*\(|`)/;
	const match = input.match(regex);
	return match ? match[1]?.trim() : undefined;
}

export function extractStack(input) {
	const regex = /`([^`]+)`$/;
	const match = input.match(regex);
	return match ? match[1] : undefined;
}

export function extractLicense(input) {
	const regex = /`([^`]+)`\s*`([^`]+)`$/;
	const match = input.match(regex);
	return match ? match[1].trim() : undefined;

}

export function extractSourceUrl(input) {
	const regex = /\[Source Code\]\(([^)]+)/;
	const match = input.match(regex);
	return match ? removeTrailingSlashes(match[1].trim()) : undefined;
}

export function extractDemoUrl(input) {
	const regex = /\[Demo\]\(([^)]+)/;
	const match = input.match(regex);
	return match ? match[1].trim() : undefined;
}
