import { Modal } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ContactUsWidget from '../components/widgets/ContactUs.widget'
import { closeWidget } from '../store/slices/widget.slice'
import { RootState } from '../store/store'
import { TWidgetProvider } from '../types/widgetProvider.types'

const WidgetProvider = () => {
	const dispatch = useDispatch()

	const widgetName = useSelector((state: RootState) => state.widget.widgetName)

	const widgetStat = useSelector(
		(state: RootState) => state.widget.widgetStatus
	)
	const [isWidgetName, setIsWidgetName] = useState<TWidgetProvider | ''>('')

	useEffect(() => {
		setIsWidgetName(widgetName as TWidgetProvider)
	}, [widgetName, isWidgetName])

	function WidgetSwitcher() {
		switch (isWidgetName) {
			case 'AboutUs':
				return <ContactUsWidget />
		}
	}

	const [isWidgetOpen, setIsWidgetOpen] = useState(widgetStat)

	const handleOk = () => {
		dispatch(closeWidget())
	}

	const handleCancel = () => {
		dispatch(closeWidget())
	}

	useEffect(() => {
		setIsWidgetOpen(widgetStat)
	}, [widgetStat, isWidgetOpen])

	return (
		<Modal
			title='Basic Modal'
			open={isWidgetOpen}
			onOk={handleOk}
			onCancel={handleCancel}
			footer={false}
		>
			<WidgetSwitcher />
		</Modal>
	)
}

export default WidgetProvider
