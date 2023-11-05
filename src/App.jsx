import { TwitterCard } from "./TwitterCard";

const users = [
	{
		name: "Dios Padre",
		userTag: "cashbrumoment",
		initialFollow: true,
	},
	{
		name: "Alejandro el grande",
		userTag: "alejoelpro",
		initialFollow: false,
	},
	{
		name: "Miguel Angel",
		userTag: "midudev",
		initialFollow: true,
	},
	{
		name: "notengoidea",
		userTag: "domeelipa",
		initialFollow: true,
	},
];

const App = () => {
	const addAt = (user) => `@${user}`;

	return (
		<div className="App">
			{users.map(({ name, userTag, initialFollow }, index) => (
				<TwitterCard
					key={index}
					user={userTag}
					formatUser={addAt}
					initialFollow={initialFollow}>
					{name}
				</TwitterCard>
			))}
		</div>
	);
};

console.log(App);
export default App;
