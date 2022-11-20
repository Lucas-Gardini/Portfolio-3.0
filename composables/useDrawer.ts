export default function useDrawer() {
	const drawer = useState("drawer", () => false);
	const toggleDrawer = () => {
		drawer.value = !drawer.value;
	};
	return { drawer, toggleDrawer };
}
