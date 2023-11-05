import { useState } from "react";
import "./App.css";

export const TwitterCard = ({ children, user, initialFollow, formatUser }) => {
	const [isFollowing, setIsFollowing] = useState(initialFollow);
	const handleClick = () => setIsFollowing(!isFollowing);

	const userAvatar = `https://unavatar.io/twitter/${user}`;
	const text = isFollowing ? "Following" : "Follow";
	const classColor = isFollowing
		? "tw-followCard-button is-following"
		: "tw-followCard-button";

	return (
		<article className="tw-followCard">
			<header className="tw-followCard-header">
				<img
					className="tw-followCard-avatar"
					src={userAvatar}
					alt="User avatar"
				/>
				<div className="tw-followCard-info">
					<strong>{children}</strong>
					<span className="tw-followCard-user">{formatUser(user)}</span>
				</div>
			</header>

			<aside className="tw-followCard-aside">
				<button className={classColor} onClick={handleClick}>
					<span className="tw-followCard-text">{text}</span>
					<span className="tw-followCard-stopFollowing">Unfollow</span>
				</button>
			</aside>
		</article>
	);
};
