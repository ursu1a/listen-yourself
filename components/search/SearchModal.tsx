import {
  Input,
  Listbox,
  ListboxItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Spinner,
} from "@heroui/react";
import { useEffect } from "react";

import { siteConfig as strings } from "@/config/site";
import { useSearch } from "@/hooks/useSearch";

export type SearchModalProps = {
  mobile?: boolean;
  open: boolean;
  onClose: () => void;
};
export const SearchModal = ({ mobile, open, onClose }: SearchModalProps) => {
  const { query, results, loading, setQuery } = useSearch();

  useEffect(() => {
    setQuery("");
  }, [open]);

  return (
    <Modal
      classNames={{
        closeButton: "top-5 lg:top-6 mr-2",
        header: "border-b-1 border-default-300",
        base: "my-auto lg:mt-36",
        wrapper: "items-start h-auto",
      }}
      isDismissable={false}
      isOpen={open}
      placement="top"
      scrollBehavior="inside"
      size={mobile ? "full" : "3xl"}
      onOpenChange={onClose}
    >
      <ModalContent>
        <ModalHeader className="py-4">
          <Input
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            isClearable
            classNames={{ base: "mr-7", clearButton: "text-default-400" }}
            id="search"
            placeholder={strings.search.placeholder}
            radius="sm"
            size="lg"
            type="search"
            value={query}
            variant="bordered"
            onValueChange={setQuery}
          />
        </ModalHeader>
        <ModalBody className="pt-4 pb-8 min-h-20">
          {loading ? (
            <Spinner classNames={{ base: "mt-2" }} color="current" />
          ) : (
            <Listbox
              aria-labelledby="search"
              classNames={{ emptyContent: "py-0", list: "gap-1.5 lg:gap-1" }}
              emptyContent={
                query && (
                  <p className="text-default-700 text-center">
                    {strings.search.no_search_results}
                    <span className="text-lg">&laquo;{query}&raquo;</span>
                  </p>
                )
              }
              role="searchbox"
            >
              {results.map((result, index) => (
                <ListboxItem
                  key={index}
                  className="py-3 px-4 bg-default-100"
                  href={result.url}
                  onPress={onClose}
                >
                  <p className="text-lg mb-1 text-blue-600 dark:text-default-500">
                    {result.title}
                  </p>
                  <p
                    dangerouslySetInnerHTML={{ __html: result.snippet }}
                    className="text-sm text-default-700 tracking-wide"
                  />
                </ListboxItem>
              ))}
            </Listbox>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
