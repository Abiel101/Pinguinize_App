import { Button } from "./ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog";
import { SlidersHorizontal } from "lucide-react";

const Navigation = () => {
	return (
		<div className="border-gray-200 border rounded-2xl w-full max-w-5/6 h-20 flex justify-between items-center px-6">
			<div className="flex items-center gap-4">
				<img src="/src/assets/penguin.svg" alt="penguin" width="50px" />
				<h1 className="text-3xl">COUNTS ORGANIZER</h1>
			</div>
			<div>
				<Dialog>
					{/* what if instead of having a dialog we have a drop down for settings and then dialog for each item in drop down. */}
					<DialogTrigger asChild>
								<Button variant="outline" size="icon">
									<SlidersHorizontal />
								</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-[425px]">
						<DialogHeader>
							<DialogTitle>Settings</DialogTitle>
							<DialogDescription>
                                <p className="text-slate-800 text-4xl">COMING SOON...</p>
							</DialogDescription>
						</DialogHeader>
						{/* Settings form or content goes here */}
					</DialogContent>
				</Dialog>
			</div>
		</div>
	);
};

export default Navigation;
