import {
	FC,
	PropsWithChildren,
	createContext,
	useEffect,
	useState
} from 'react'

const ThemeColors = createContext({})

const ThemeContext: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [colors, setColors] = useState({})

	useEffect(() => {
		if (window !== undefined) {
			const getHex = (color: string) =>
				window.getComputedStyle(document.body).getPropertyValue(color).trim()

			const obj = {
				primary: {
					light: getHex('--bs-primary').concat('1a'),
					main: getHex('--bs-primary')
				},
				secondary: {
					light: getHex('--bs-secondary').concat('1a'),
					main: getHex('--bs-secondary')
				},
				success: {
					light: getHex('--bs-success').concat('1a'),
					main: getHex('--bs-success')
				},
				danger: {
					light: getHex('--bs-danger').concat('1a'),
					main: getHex('--bs-danger')
				},
				warning: {
					light: getHex('--bs-warning').concat('1a'),
					main: getHex('--bs-warning')
				},
				info: {
					light: getHex('--bs-info').concat('1a'),
					main: getHex('--bs-info')
				},
				dark: {
					light: getHex('--bs-dark').concat('1a'),
					main: getHex('--bs-dark')
				}
			}

			setColors({ ...obj })
		}
	}, [])

	return (
		<ThemeColors.Provider value={{ colors }}>{children}</ThemeColors.Provider>
	)
}

export { ThemeColors, ThemeContext }
