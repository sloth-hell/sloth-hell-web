interface BtnImageProps {
	title: string;
	imgSrc: string;
}

export default function BtnImage({ title, imgSrc }: BtnImageProps) {
	return (
		<button type="button">
			<picture>
				<source srcSet={imgSrc} type="image/webp" />
				<img src={imgSrc} alt={title} />
			</picture>
		</button>
	);
}
