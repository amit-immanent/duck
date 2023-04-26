// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connDB } from "@/utils/conn"
export default async function handler(req, res) {
 await  connDB()
  res.status(200).json({ name: 'John Doe' })
}
