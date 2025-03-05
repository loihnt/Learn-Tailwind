import React, { useState } from "react";

export default function ConditonalRendering() {
	const [visible, setVisible] = useState(false);

	return (
		<div>
			<button
				className={visible ? "font-bold" : "line-through"}
				onClick={() => setVisible((p) => !p)}
			>
				Xem hentai
			</button>
			{visible && (
				<div>
					<h1>Day la hentai hahahaha</h1>
					<img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*rgxBZQVyrT1iiLIA.png" />
				</div>
			)}
		</div>
	);
}
