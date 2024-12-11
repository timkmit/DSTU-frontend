import { Button } from "@/shared/ui/Button";
import { Card } from "@/shared/ui/Card";
import { ShortArrowRight } from "@/shared/ui/icons";
import { TextField } from "@/shared/ui/Input";
import { Paper } from "@/shared/ui/Paper";
import { Stars } from "@/shared/ui/Stars";
import { Typography } from "@/shared/ui/Text";

const TestPage = () => {
	return (
		<Paper variant="primary" className="flex flex-col gap-3 p-4">
			<Typography.Title as="h3">Buttons</Typography.Title>
			<Paper variant="white" className="grid grid-cols-3 items-center justify-center gap-2 p-4 rounded-lg">
				<Button>Main Button</Button>
				<Button variant="text">Text Button</Button>
				<Button variant="small">
					<span className="inline-flex">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
							<path
								fillRule="evenodd"
								d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
								clipRule="evenodd"
							/>
						</svg>
						Small Button
					</span>
				</Button>

				<Button variant="icon">
					<ShortArrowRight stroke="#38424F" />
				</Button>
				<Button variant="link-main" href="#">
					Link Button
				</Button>
				<Button variant="socials">VK</Button>
				<Button variant="large">Large Button</Button>
			</Paper>
			<Typography.Title as="h3">Typography</Typography.Title>
			<Paper variant="white" className="flex flex-col gap-3 p-4 rounded-lg">
				<Typography.Title as="h1">Title H1</Typography.Title>
				<Typography.Title as="h2">Title H2</Typography.Title>
				<Typography.Title as="h3">Title H3</Typography.Title>
				<Typography.Title as="h4">Title H4</Typography.Title>
				<Typography.Paragraph variant="accent">Text Accent</Typography.Paragraph>
				<Typography.Paragraph variant="button">Text Button</Typography.Paragraph>
				<Typography.Paragraph variant="button_small">Text Button Small</Typography.Paragraph>
				<Typography.Paragraph variant="body">Text Body</Typography.Paragraph>
				<Typography.Paragraph variant="caption">Text Caption</Typography.Paragraph>
			</Paper>
			<Typography.Title as="h3">TextField</Typography.Title>
			<Paper variant="white" className="flex flex-col gap-3 p-4 rounded-lg">
				<TextField label="Placeholder" error="Поле Хороший отзыв обязательно" />
				<TextField label="Placeholder" caption="Крутое описание инпута" />
				<TextField label="Placeholder" title="Крутое описание инпута" />
				<TextField label="Placeholder" disabled title="Disabled" />
			</Paper>
			<Typography.Title as="h3">Card</Typography.Title>
			<Paper className="grid grid-cols-3 gap-3 max-sm:grid-cols-1">
				<Card
					title="Конкурс на получение грантов для реализации научно-исследовательских проектов «Наука-2030»"
					description="Главный корпус ДГТУ"
					caption="11:00"
					actionDescription={<Typography.Paragraph>11 января</Typography.Paragraph>}
				/>
				<Card
					title="Конкурс на получение грантов для реализации научно-исследовательских проектов «Наука-2030»"
					description="Главный корпус ДГТУ"
					actionDescription={<Typography.Paragraph>11 января</Typography.Paragraph>}
				/>
				<Card
					title="Конкурс на получение грантов для реализации научно-исследовательских проектов «Наука-2030»"
					caption="11:00"
					actionDescription={<Typography.Paragraph>11 января</Typography.Paragraph>}
				/>
				<Card
					title="Конкурс на получение грантов для реализации научно-исследовательских проектов «Наука-2030»"
					description="Главный корпус ДГТУ"
					caption="11:00"
					actionDescription={<Typography.Paragraph>11 января</Typography.Paragraph>}
				/>
				<Card
					title="Конкурс на получение грантов для реализации научно-исследовательских проектов «Наука-2030»"
					description="Главный корпус ДГТУ"
					caption="11:00"
					actionDescription={<Typography.Paragraph>11 января</Typography.Paragraph>}
				/>
				<Card
					title="Конкурс на получение грантов для реализации научно-исследовательских проектов «Наука-2030»"
					description="Главный корпус ДГТУ"
					caption="11:00"
					actionDescription={<Typography.Paragraph>11 января</Typography.Paragraph>}
				/>
			</Paper>
			<Typography.Title as="h3">Stars</Typography.Title>
			<Paper variant="white" className="grid grid-cols-3 gap-3 p-3 rounded-lg">
				<div>
					<Typography.Title as="h4">Stars 0/5</Typography.Title>
					<Stars rating={0} />
				</div>
				<div>
					<Typography.Title as="h4">Stars 1/5</Typography.Title>
					<Stars rating={1} />
				</div>
				<div>
					<Typography.Title as="h4">Stars 2/5</Typography.Title>
					<Stars rating={2} />
				</div>
				<div>
					<Typography.Title as="h4">Stars 3/5</Typography.Title>
					<Stars rating={3} />
				</div>
				<div>
					<Typography.Title as="h4">Stars 4/5</Typography.Title>
					<Stars rating={4} />
				</div>
				<div>
					<Typography.Title as="h4">Stars 5/5</Typography.Title>
					<Stars rating={5} />
				</div>
				<div>
					<Typography.Title as="h4">Stars 0/10</Typography.Title>
					<Stars rating={0} maxRating={10} />
				</div>
				<div>
					<Typography.Title as="h4">Stars 5/10</Typography.Title>
					<Stars rating={5} maxRating={10} />
				</div>
				<div>
					<Typography.Title as="h4">Stars 10/10</Typography.Title>
					<Stars rating={10} maxRating={10} />
				</div>
				<div>
					<Typography.Title as="h4">Big Stars 0/3</Typography.Title>
					<Stars starClassname="h-10 w-10" rating={0} maxRating={3} />
				</div>
				<div>
					<Typography.Title as="h4">Big Stars 1/3</Typography.Title>
					<Stars starClassname="h-10 w-10" rating={1} maxRating={3} />
				</div>
				<div>
					<Typography.Title as="h4">Big Stars 2/3</Typography.Title>
					<Stars starClassname="h-10 w-10" rating={2} maxRating={3} />
				</div>
			</Paper>
		</Paper>
	);
};

export default TestPage;
