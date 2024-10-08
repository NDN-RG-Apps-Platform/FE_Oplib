"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DateRangePicker,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import ModalForgot from "./modalforgot";

export default function ModalSearch() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [selectedKeys, setSelectedKeys] = React.useState(
    new Set(["Select Type"])
  );
  const [selectedKeys2, setSelectedKeys2] = React.useState(
    new Set(["Select Location"])
  );

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const selectedValue2 = React.useMemo(
    () => Array.from(selectedKeys2).join(", ").replaceAll("_", " "),
    [selectedKeys2]
  );

  return (
    <>
      <Button
        isIconOnly
        className="text-alice-blue bg-dodger-blue"
        variant="flat"
        aria-label="Search in advance"
        onPress={onOpen}
      >
        <FontAwesomeIcon icon={faSearchengin}></FontAwesomeIcon>
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        backdrop="blur"
      >
        <ModalContent className="w-3/4 max-w-4xl">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-dark-red font-bold text-xl mt-2">
                Advanced Search
              </ModalHeader>
              <ModalBody className="grid grid-cols-2 gap-4">
                <Dropdown>
                  <DropdownTrigger>
                    <Button
                      variant="bordered"
                      className="capitalize"
                      endContent={
                        <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
                      }
                    >
                      {selectedValue}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Select Type"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selectedKeys}
                    onSelectionChange={setSelectedKeys}
                  >
                    <DropdownItem key="text">Text</DropdownItem>
                    <DropdownItem key="number">Number</DropdownItem>
                    <DropdownItem key="date">Date</DropdownItem>
                    <DropdownItem key="single_date">Single Date</DropdownItem>
                    <DropdownItem key="iteration">Iteration</DropdownItem>
                  </DropdownMenu>
                </Dropdown>

                <Dropdown>
                  <DropdownTrigger>
                    <Button
                      variant="bordered"
                      className="capitalize"
                      endContent={
                        <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
                      }
                    >
                      {selectedValue2}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selectedKeys2}
                    onSelectionChange={setSelectedKeys2}
                  >
                    <DropdownItem key="location1">Location1</DropdownItem>
                    <DropdownItem key="location2">Location2</DropdownItem>
                    <DropdownItem key="location3">Location3</DropdownItem>
                    <DropdownItem key="location4">Location4</DropdownItem>
                    <DropdownItem key="location5">Location5</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <Input
                  type="text"
                  variant="flat"
                  label="Catalog Number"
                  placeholder="Enter catalog number.."
                />
                <Input
                  type="text"
                  variant="flat"
                  label="Title"
                  placeholder="Enter title.."
                />
                <Input
                  type="text"
                  variant="flat"
                  label="Author"
                  placeholder="Enter author.."
                />
                <Input
                  type="text"
                  variant="flat"
                  label="Publisher"
                  placeholder="Enter publisher.."
                />
                <Input
                  type="text"
                  variant="flat"
                  label="Editor/Mentor"
                  placeholder="Enter editor/mentor.."
                />
                <Input
                  type="text"
                  variant="flat"
                  label="Subject"
                  placeholder="Enter subject.."
                />
                <Input
                  type="text"
                  variant="flat"
                  label="Classification Code"
                  placeholder="Enter classification code.."
                />

                <DateRangePicker label="Entry Date" visibleMonths={2} />
              </ModalBody>
              <ModalFooter className="flex justify-end gap-2">
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Search
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
