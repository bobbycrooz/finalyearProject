const home = (isActive) => (
	<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M12.3049 2.92638C11.796 2.58635 11.2041 2.58635 10.6953 2.92638L10.6769 2.93845L3.98284 7.21776C3.24315 7.68963 2.83341 8.50395 2.83341 9.31999V18.4621C2.83341 19.3252 3.51511 20.0047 4.36948 20.0047H18.6307C19.485 20.0047 20.1667 19.3252 20.1667 18.4621V9.31999C20.1667 8.47607 19.7203 7.71951 18.9962 7.20429L12.3233 2.93845L12.3049 2.92638ZM13.4988 1.11837C12.2663 0.300141 10.7338 0.300141 9.50133 1.11838L2.81669 5.39168C1.42233 6.28143 0.666748 7.80194 0.666748 9.31999V18.4621C0.666748 20.5167 2.3134 22.1714 4.36948 22.1714H18.6307C20.6867 22.1714 22.3334 20.5167 22.3334 18.4621V9.31999C22.3334 7.64202 21.4289 6.26437 20.2231 5.41822C20.2104 5.40927 20.1974 5.40062 20.1843 5.39223L13.4988 1.11837Z"
			fill={isActive ? '#6610F2' : '#717171'}
		/>
	</svg>
);

export const category = (isActive) => (
	<svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M10.1733 4.84279C8.79612 4.68887 7.37055 4.68887 5.99339 4.84279C5.65876 4.88019 5.39486 5.14516 5.35723 5.46698C5.19277 6.87308 5.19277 8.29356 5.35723 9.69967C5.39486 10.0215 5.65876 10.2864 5.99339 10.3239C7.37055 10.4778 8.79612 10.4778 10.1733 10.3239C10.5079 10.2864 10.7718 10.0215 10.8094 9.69967C10.9739 8.29356 10.9739 6.87308 10.8094 5.46698C10.7718 5.14516 10.5079 4.88019 10.1733 4.84279ZM5.8129 3.22785C7.31001 3.06053 8.85665 3.06053 10.3538 3.22785C11.4272 3.34781 12.2965 4.1928 12.4234 5.27821C12.6026 6.80973 12.6026 8.35691 12.4234 9.88844C12.2965 10.9738 11.4272 11.8188 10.3538 11.9388C8.85665 12.1061 7.31001 12.1061 5.8129 11.9388C4.73949 11.8188 3.87018 10.9738 3.74323 9.88844C3.5641 8.35691 3.5641 6.80973 3.74323 5.27821C3.87018 4.1928 4.73949 3.34781 5.8129 3.22785Z"
			fill={isActive ? '#6610F2' : '#717171'}
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M10.1733 15.6762C8.79612 15.5222 7.37055 15.5222 5.99339 15.6762C5.65876 15.7136 5.39486 15.9785 5.35723 16.3004C5.19277 17.7065 5.19277 19.1269 5.35723 20.533C5.39486 20.8548 5.65876 21.1198 5.99339 21.1572C7.37055 21.3111 8.79612 21.3111 10.1733 21.1572C10.5079 21.1198 10.7718 20.8548 10.8094 20.533C10.9739 19.1269 10.9739 17.7065 10.8094 16.3004C10.7718 15.9785 10.5079 15.7136 10.1733 15.6762ZM5.8129 14.0613C7.31001 13.8939 8.85665 13.8939 10.3538 14.0613C11.4272 14.1812 12.2965 15.0262 12.4234 16.1116C12.6026 17.6431 12.6026 19.1903 12.4234 20.7218C12.2965 21.8072 11.4272 22.6522 10.3538 22.7721C8.85665 22.9395 7.31001 22.9395 5.8129 22.7721C4.73949 22.6522 3.87018 21.8072 3.74323 20.7218C3.5641 19.1903 3.5641 17.6431 3.74323 16.1116C3.87018 15.0262 4.73949 14.1812 5.8129 14.0613Z"
			fill={isActive ? '#6610F2' : '#717171'}
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M21.0067 4.84279C19.6294 4.68887 18.2039 4.68887 16.8268 4.84279C16.4921 4.88019 16.2282 5.14516 16.1906 5.46698C16.0262 6.87308 16.0262 8.29356 16.1906 9.69967C16.2282 10.0215 16.4921 10.2864 16.8268 10.3239C18.2039 10.4778 19.6294 10.4778 21.0067 10.3239C21.3413 10.2864 21.6052 10.0215 21.6428 9.69967C21.8073 8.29356 21.8073 6.87308 21.6428 5.46698C21.6052 5.14516 21.3413 4.88019 21.0067 4.84279ZM16.6463 3.22785C18.1434 3.06053 19.69 3.06053 21.1872 3.22785C22.2605 3.34781 23.1299 4.1928 23.2568 5.27821C23.436 6.80973 23.436 8.35691 23.2568 9.88844C23.1299 10.9738 22.2605 11.8188 21.1872 11.9388C19.69 12.1061 18.1434 12.1061 16.6463 11.9388C15.5729 11.8188 14.7035 10.9738 14.5766 9.88844C14.3975 8.35691 14.3975 6.80973 14.5766 5.27821C14.7035 4.1928 15.5729 3.34781 16.6463 3.22785Z"
			fill={isActive ? '#6610F2' : '#717171'}
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M21.0067 15.6762C19.6294 15.5222 18.2039 15.5222 16.8268 15.6762C16.4921 15.7136 16.2282 15.9785 16.1906 16.3004C16.0262 17.7065 16.0262 19.1269 16.1906 20.533C16.2282 20.8548 16.4921 21.1198 16.8268 21.1572C18.2039 21.3111 19.6294 21.3111 21.0067 21.1572C21.3413 21.1198 21.6052 20.8548 21.6428 20.533C21.8073 19.1269 21.8073 17.7065 21.6428 16.3004C21.6052 15.9785 21.3413 15.7136 21.0067 15.6762ZM16.6463 14.0613C18.1434 13.8939 19.69 13.8939 21.1872 14.0613C22.2605 14.1812 23.1299 15.0262 23.2568 16.1116C23.436 17.6431 23.436 19.1903 23.2568 20.7218C23.1299 21.8072 22.2605 22.6522 21.1872 22.7721C19.69 22.9395 18.1434 22.9395 16.6463 22.7721C15.5729 22.6522 14.7035 21.8072 14.5766 20.7218C14.3975 19.1903 14.3975 17.6431 14.5766 16.1116C14.7035 15.0262 15.5729 14.1812 16.6463 14.0613Z"
			fill={isActive ? '#6610F2' : '#717171'}
		/>
	</svg>
);

export const cart = (isActive) => (
	<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M24.05 5.63331C23.5084 4.98331 22.75 4.54998 21.8834 4.54998H9.10004C8.45004 4.54998 8.01671 4.98331 8.01671 5.63331C8.01671 6.28331 8.45004 6.71665 9.10004 6.71665H21.775C21.9917 6.71665 22.2084 6.82498 22.2084 6.93331C22.3167 7.14998 22.425 7.36665 22.3167 7.58331L20.8 14.1916C20.5834 15.275 19.6084 16.0333 18.525 16.0333H11.5917C10.5084 16.0333 9.64171 15.3833 9.31671 14.3L8.45004 11.5916L6.17504 4.11665C5.63337 2.27498 4.00837 1.08331 2.16671 1.08331C1.51671 1.08331 1.08337 1.51665 1.08337 2.16665C1.08337 2.81665 1.51671 3.24998 2.16671 3.24998C3.03337 3.24998 3.90004 3.89998 4.11671 4.76665L4.87504 7.25831L7.25837 14.95C7.80004 16.9 9.53337 18.2 11.5917 18.2H18.7417C20.9084 18.2 22.6417 16.6833 23.1834 14.625L24.7 8.01665C24.8084 7.25831 24.5917 6.39165 24.05 5.63331Z"
			fill={isActive ? '#6610F2' : '#717171'}
		/>
		<path
			d="M10.725 19.2833C9.20833 19.2833 7.90833 20.5833 7.90833 22.1C7.90833 23.6167 9.20833 24.9167 10.725 24.9167C12.2417 24.9167 13.5417 23.6167 13.5417 22.1C13.5417 20.5833 12.2417 19.2833 10.725 19.2833ZM10.725 22.75C10.4 22.75 10.075 22.425 10.075 22.1C10.075 21.775 10.4 21.45 10.725 21.45C11.05 21.45 11.375 21.775 11.375 22.1C11.375 22.425 11.05 22.75 10.725 22.75Z"
			fill={isActive ? '#6610F2' : '#717171'}
		/>
		<path
			d="M19.2833 19.2833C17.7667 19.2833 16.4667 20.5833 16.4667 22.1C16.4667 23.6167 17.7667 24.9167 19.2833 24.9167C20.8 24.9167 22.1 23.6167 22.1 22.1C22.1 20.5833 20.8 19.2833 19.2833 19.2833ZM19.2833 22.75C18.9583 22.75 18.6333 22.425 18.6333 22.1C18.6333 21.775 18.9583 21.45 19.2833 21.45C19.6083 21.45 19.9333 21.775 19.9333 22.1C19.9333 22.425 19.6083 22.75 19.2833 22.75Z"
			fill={isActive ? '#6610F2' : '#717171'}
		/>
	</svg>
);

export const cartTwo = (isActive) => (
	<svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M24.05 5.63331C23.5084 4.98331 22.75 4.54998 21.8834 4.54998H9.10004C8.45004 4.54998 8.01671 4.98331 8.01671 5.63331C8.01671 6.28331 8.45004 6.71665 9.10004 6.71665H21.775C21.9917 6.71665 22.2084 6.82498 22.2084 6.93331C22.3167 7.14998 22.425 7.36665 22.3167 7.58331L20.8 14.1916C20.5834 15.275 19.6084 16.0333 18.525 16.0333H11.5917C10.5084 16.0333 9.64171 15.3833 9.31671 14.3L8.45004 11.5916L6.17504 4.11665C5.63337 2.27498 4.00837 1.08331 2.16671 1.08331C1.51671 1.08331 1.08337 1.51665 1.08337 2.16665C1.08337 2.81665 1.51671 3.24998 2.16671 3.24998C3.03337 3.24998 3.90004 3.89998 4.11671 4.76665L4.87504 7.25831L7.25837 14.95C7.80004 16.9 9.53337 18.2 11.5917 18.2H18.7417C20.9084 18.2 22.6417 16.6833 23.1834 14.625L24.7 8.01665C24.8084 7.25831 24.5917 6.39165 24.05 5.63331Z"
			fill={isActive ? '#6610F2' : '#717171'}
		/>
		<path
			d="M10.725 19.2833C9.20833 19.2833 7.90833 20.5833 7.90833 22.1C7.90833 23.6167 9.20833 24.9167 10.725 24.9167C12.2417 24.9167 13.5417 23.6167 13.5417 22.1C13.5417 20.5833 12.2417 19.2833 10.725 19.2833ZM10.725 22.75C10.4 22.75 10.075 22.425 10.075 22.1C10.075 21.775 10.4 21.45 10.725 21.45C11.05 21.45 11.375 21.775 11.375 22.1C11.375 22.425 11.05 22.75 10.725 22.75Z"
			fill={isActive ? '#6610F2' : '#717171'}
		/>
		<path
			d="M19.2833 19.2833C17.7667 19.2833 16.4667 20.5833 16.4667 22.1C16.4667 23.6167 17.7667 24.9167 19.2833 24.9167C20.8 24.9167 22.1 23.6167 22.1 22.1C22.1 20.5833 20.8 19.2833 19.2833 19.2833ZM19.2833 22.75C18.9583 22.75 18.6333 22.425 18.6333 22.1C18.6333 21.775 18.9583 21.45 19.2833 21.45C19.6083 21.45 19.9333 21.775 19.9333 22.1C19.9333 22.425 19.6083 22.75 19.2833 22.75Z"
			fill={isActive ? '#6610F2' : '#717171'}
		/>
	</svg>
);

export const order = (isActive) => (
	<svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M19.675 2.16669H7.32496C4.72496 2.16669 2.66663 4.22502 2.66663 6.82502V19.2834C2.66663 21.775 4.72496 23.8334 7.32496 23.8334H19.7833C22.3833 23.8334 24.4416 21.775 24.4416 19.175V6.82502C24.3333 4.22502 22.275 2.16669 19.675 2.16669ZM22.1666 19.175C22.1666 20.5834 21.0833 21.6667 19.675 21.6667H7.32496C5.91663 21.6667 4.83329 20.5834 4.83329 19.175V6.82502C4.83329 5.41669 5.91663 4.33335 7.32496 4.33335H8.94996V13C8.94996 13.4334 9.16663 13.7584 9.59996 13.975C9.59996 14.0834 9.81663 14.0834 9.92496 14.0834C10.1416 14.0834 10.3583 13.975 10.575 13.8667L13.5 11.7L16.425 13.8667C16.75 14.0834 17.1833 14.1917 17.5083 13.975C17.8333 13.7584 18.1583 13.4334 18.1583 13V6.50002C18.1583 5.85002 17.725 5.41669 17.075 5.41669C16.425 5.41669 15.9916 5.85002 15.9916 6.50002V10.8334L14.15 9.42502C13.7166 9.10002 13.2833 9.10002 12.85 9.42502L11.0083 10.8334V4.33335H19.675C21.0833 4.33335 22.1666 5.41669 22.1666 6.82502V19.175Z"
			fill={isActive ? '#6610F2' : '#717171'}
		/>
		<path
			d="M12.6334 18.0917H7.32503C6.67503 18.0917 6.2417 18.525 6.2417 19.175C6.2417 19.825 6.67503 20.2583 7.32503 20.2583H12.6334C13.2834 20.2583 13.7167 19.825 13.7167 19.175C13.7167 18.525 13.175 18.0917 12.6334 18.0917Z"
			fill={isActive ? '#6610F2' : '#717171'}
		/>
	</svg>
);

export const user = (isActive) => (
	<svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M22.9024 19.9162C21.8166 17.2632 19.7538 15.2734 17.2566 14.2785C18.668 13.173 19.5367 11.4043 19.5367 9.52508C19.5367 5.98767 16.8223 3.22406 13.4565 3.22406C10.0907 3.22406 7.37636 5.98767 7.37636 9.41454C7.37636 11.2938 8.24496 13.0625 9.65641 14.1679C7.15922 15.1629 5.09631 17.1526 4.01058 19.8057C3.57628 20.9111 3.68486 22.2377 4.3363 23.2326C4.98774 24.338 6.18205 24.8908 7.48493 24.8908H19.5367C20.8395 24.8908 21.9253 24.2274 22.6853 23.2326C23.3367 22.2377 23.4453 21.0216 22.9024 19.9162ZM9.54784 9.41454C9.54784 7.20365 11.285 5.43495 13.4565 5.43495C15.628 5.43495 17.3651 7.20365 17.3651 9.41454C17.3651 11.6255 15.628 13.3941 13.4565 13.3941C11.285 13.3941 9.54784 11.6255 9.54784 9.41454ZM20.8395 22.1272C20.5138 22.5693 20.0795 22.9009 19.5367 22.9009H7.37636C6.83349 22.9009 6.39921 22.6799 6.07348 22.1272C5.74776 21.685 5.74776 21.2427 5.96491 20.8006C7.26779 17.5948 10.1993 15.605 13.4565 15.605C16.7137 15.605 19.6452 17.5948 20.9481 20.69C21.1652 21.1322 21.0567 21.685 20.8395 22.1272Z"
			fill={isActive ? '#6610F2' : '#717171'}
		/>
	</svg>
);

export default home;
