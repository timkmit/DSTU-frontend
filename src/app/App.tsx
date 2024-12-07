import { Suspense } from "react";
import { AppRouter } from "./providers/router";
import "./index.css";
import { PageLoader } from "@/widgets/PageLoader";

const App = () => {
	return (
		<div>
			<Suspense fallback={<PageLoader />}>
				{/* <Navbar /> */}
				<div className="content-page">
					{/* <Sidebar /> */}
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};

export default App;
