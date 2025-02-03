"use client";
import { Button, Input, Kbd, useDisclosure } from "@heroui/react";
import { useEffect } from "react";

import { SearchModal } from "./SearchModal";

import { SearchIcon } from "@/components/shared/icons";
import { siteConfig as strings } from "@/config/site";

export type SearchInputProps = {
  isMobile?: boolean;
};

export const SearchInput = ({ isMobile }: SearchInputProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        onOpen();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onOpen]);

  const onSearchStart = () => {
    onOpen();
  };

  const onSearchEnd = () => {
    onOpenChange();
  };

  return (
    <>
      <SearchModal mobile={isMobile} open={isOpen} onClose={onSearchEnd} />
      {isMobile ? (
        <Button
          isIconOnly
          aria-label="Search"
          className="text-default-500"
          size="sm"
          variant="light"
          onPress={onSearchStart}
        >
          <SearchIcon size={20} />
        </Button>
      ) : (
        <Input
          isReadOnly
          aria-label="search"
          classNames={{
            inputWrapper: "bg-default-100 text-default",
            input: "text-sm",
          }}
          endContent={
            <Kbd className="hidden lg:inline-block" keys={["command"]}>
              K
            </Kbd>
          }
          labelPlacement="outside"
          placeholder={strings.search.placeholder}
          startContent={
            <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
          }
          type="search"
          onClick={onSearchStart}
        />
      )}
    </>
  );
};
