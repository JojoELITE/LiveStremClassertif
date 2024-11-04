import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "over",
      totalAmount: "12h23",
      invites: 56,
    },
    {
      invoice: "INV002",
      paymentStatus: "trainning",
      totalAmount: "12h55",
      invites: 12,
    },
    {
      invoice: "INV003",
      paymentStatus: "not start",
      totalAmount: "12h45",
      invites: 78,
    },
    {
      invoice: "INV004",
      paymentStatus: "over",
      totalAmount: "12h23",
      invites: 56,
    },
    {
      invoice: "INV005",
      paymentStatus: "over",
      totalAmount: "12h23",
      invites: 12,
    },
    {
      invoice: "INV006",
      paymentStatus: "trainning",
      totalAmount: "12h23",
      invites: 78,
    },
    {
      invoice: "INV007",
      paymentStatus: "not start",
      totalAmount: "12h23",
      invites: 56,
    },
  ]
  
  export default function page() {
    return (
      <Table>
        <TableCaption>A list of your recent meet.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">meet name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>invite</TableHead>
            <TableHead className="text-right">date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.invites}</TableCell>
              <TableCell className="text-right">{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  