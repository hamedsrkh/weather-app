import { IPStack } from 'src/types'

export function getIpStackUrl(ip: string) {
  return `http://api.ipstack.com/${ip}?access_key=${process.env.NEXT_PUBLIC_IP_STACK_API_KEY}`
}

export async function fetchIpData(ip?: string | string[]) {
  if (ip) {
    const clientIp = Array.isArray(ip) ? ip[0] : ip
    const url = getIpStackUrl(clientIp)
    const response = await fetch(url)

    if (response.ok) {
      return (await response.json()) as IPStack
    }
  }
}
