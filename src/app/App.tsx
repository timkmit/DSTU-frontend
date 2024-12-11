import { Suspense } from "react";
import { AppRouter } from "./providers/router";
import "./index.css";
import { PageLoader } from "@/widgets/PageLoader";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";

const App = () => {
	return (
		<div>
			<Suspense fallback={<PageLoader />}>
				<div className="min-h-screen flex flex-col">
					<Header />
					<AppRouter />
					<Footer />
				</div>
			</Suspense>
		</div>
	);
};

export default App;
