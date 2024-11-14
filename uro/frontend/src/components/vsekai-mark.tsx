import type { ComponentProps, FC } from "react";

export const VSekaiMark: FC<ComponentProps<"svg">> = (props) => {
	return (
		<svg
			fill="currentColor"
			{...props}
			viewBox="0 0 233 233"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M75.3858 78.5903c-6.9467 7.0845-15.9992 12.065-26.1332 13.9087l32.2517 64.892c6.4203-7.707 15.1279-13.411 25.0687-16.05L75.3858 78.5903Zm80.6022 77.9557c-6.567-7.534-15.369-13.039-25.361-15.462l30.066-60.4936c7.317 6.6412 16.625 11.0953 26.912 12.3412l-31.617 63.6144Zm-8.499-129.9804H86.5105c1.9754 5.3647 3.0547 11.1685 3.0547 17.2265 0 4.341-.5542 8.5515-1.5952 12.5635h58.06c-1.041-4.012-1.595-8.2225-1.595-12.5635 0-6.058 1.079-11.8618 3.054-17.2265ZM231 43.792c0 20.872-16.78 37.7921-37.479 37.7921-20.7 0-37.48-16.9201-37.48-37.7921 0-20.8719 16.78-37.792 37.48-37.792C214.22 6 231 22.9201 231 43.792Zm-153.0411.0001c0 20.872-16.7801 37.792-37.4794 37.792C19.7801 81.5841 3 64.6641 3 43.7921s16.7801-37.792 37.4795-37.792c20.6993 0 37.4794 16.92 37.4794 37.792ZM156.586 189.208c0 20.872-16.781 37.792-37.48 37.792-20.6992 0-37.4793-16.92-37.4793-37.792s16.7801-37.792 37.4793-37.792c20.699 0 37.48 16.92 37.48 37.792Z" />
		</svg>
	);
};
