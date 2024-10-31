import { axiosClassic } from '../api/interceptors'
import { IOrderReq, IOrderRes } from '../styles/order.types'

export const orderService = {
	async create(data: IOrderReq) {
		const res = await axiosClassic.post<IOrderRes>('/order', data)

		return res
	},
}
