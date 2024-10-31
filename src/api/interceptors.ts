import axios, { type CreateAxiosDefaults } from 'axios'

const options: CreateAxiosDefaults = {
	baseURL: 'http://localhost:3006/api/',
}

const axiosClassic = axios.create(options)

export { axiosClassic }
