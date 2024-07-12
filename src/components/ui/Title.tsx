type TitleProps = {
	name: string;
};

const Title = ({ name = "" }: TitleProps) => {
	return (
		<h2 className="text-center py-10 font-bold italic text-blue-950 shadow-black drop-shadow-lg text-2xl  md:text-3xl px-3 md:px-0 uppercase">
			{name}
		</h2>
	);
};

export default Title;
