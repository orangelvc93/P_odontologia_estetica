import { ComponentProps } from "react";

type ButtonProps = {
	className?: string;
	urlLink: string;
	buttonContent: string;
};

const Button = ({
	className = "bg-slate-700 text-white hover:bg-slate-800",
	urlLink = "",
	buttonContent = "",
}: ButtonProps) => {
	return (
		<div className="">
			<a
				href={urlLink}
				className={`rounded-md uppercase font-bold py-3 px-7   ${className}`}
			>
				{buttonContent}
			</a>
		</div>
	);
};

export default Button;
