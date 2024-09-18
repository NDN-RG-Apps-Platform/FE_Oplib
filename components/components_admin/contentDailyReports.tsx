import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import ModalViewDailyReports from "./modalReviewDailyReports";

export default function ContentDailyReports() {
  return (
    <Table
      aria-label="Account Management Table"
      className="border-separate border-spacing-y-2"
    >
      <TableHeader>
        <TableColumn className="bg-white text-dark-red font-bold text-md text-center rounded-tl-md rounded-bl-md">
          Date
        </TableColumn>
        <TableColumn className="bg-white text-dark-red font-bold text-md text-center">
          Report Author
        </TableColumn>
        <TableColumn className="bg-white text-dark-red font-bold text-md text-center">
          Total Books Borrowed
        </TableColumn>
        <TableColumn className="bg-white text-dark-red font-bold text-md text-center">
          Total Rooms Rented
        </TableColumn>
        <TableColumn className="bg-white text-dark-red font-bold text-md text-center">
          Description
        </TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1" className="bg-[#F9F9F9] rounded-lg shadow-md mb-2">
          <TableCell className="text-center">23/03/2024</TableCell>
          <TableCell className="text-center">Aliza Nurfitrian Meizahra</TableCell>
          <TableCell className="text-center">24</TableCell>
          <TableCell className="text-center">4</TableCell>
          <TableCell className="flex gap-2 text-white text-center items-center justify-center">
            <ModalViewDailyReports />
          </TableCell>
        </TableRow>
        <TableRow key="2" className="bg-[#F9F9F9] rounded-lg shadow-md mb-2">
          <TableCell className="text-center">23/03/2024</TableCell>
          <TableCell className="text-center">Aliza Nurfitrian Meizahra</TableCell>
          <TableCell className="text-center">31</TableCell>
          <TableCell className="text-center">7</TableCell>
          <TableCell className="flex gap-2 text-white text-center items-center justify-center">
            <ModalViewDailyReports />
          </TableCell>
        </TableRow>
        <TableRow key="3" className="bg-[#F9F9F9] rounded-lg shadow-md mb-2">
          <TableCell className="text-center">23/03/2024</TableCell>
          <TableCell className="text-center">Aliza Nurfitrian Meizahra</TableCell>
          <TableCell className="text-center">56</TableCell>
          <TableCell className="text-center">11</TableCell>
          <TableCell className="flex gap-2 text-white text-center items-center justify-center">
            <ModalViewDailyReports />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
