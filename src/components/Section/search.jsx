import { Overlay, SearchInput, toaster } from "evergreen-ui";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Search = () => {
  const [isShown, setIsshown] = useState(null);
  return (
    <>
      <Overlay
        isShown={isShown}
        onExited={() => {
          setIsshown(false);
        }}
      >
        <div className="search">
          <SearchInput
            placeholder="Filter traits..."
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                toaster.success("You have successfully entered your search", {
                  description: `You search "${e.target.value}"`,
                });
              }
            }}
          />
        </div>
      </Overlay>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        
        onClick={() => setIsshown(true)}
      />
    </>
  );
};

export default Search;
