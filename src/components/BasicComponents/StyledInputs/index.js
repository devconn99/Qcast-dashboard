import React, { useState, useRef, useEffect } from 'react';
import { css } from "aphrodite";
import styles from './styles';
import img_close from "assets/images/icons/close.png";
import img_search from "assets/images/icons/search.png";

export function StyledInputSearchBar(props) {
  const { showSearch } = props;
  const [isSearch, setIsSearch] = useState(false);
  const [searchKey, setSearchKey] = useState('');

  const handleClose = () => {
    console.log(" - close clicked ");
    setIsSearch(true);
    setSearchKey('');
    refInput.current.focus();
  }
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(" - search clicked ");
    setIsSearch(true);
    showSearch(searchKey);
    refInput.current.focus();
  }
  const handleShow = (e) => {
    e.preventDefault();
    console.log(" - show clicked ");
    setIsSearch(true);
  }

  const handleInputChange = (e) => {
    setSearchKey(e.target.value);
  }
  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      showSearch(searchKey);
    }
  };
  const handleOnBlur = (e) => {
    console.log("setIsLost(true): ");
    if (searchKey === "") {
      setIsSearch(false);
    }
  }
  const refContainer = useRef(null);
  const refInput = useRef(null);

  useEffect(() => {
    if (isSearch) {
      refInput.current.focus();
    }
  }, [isSearch])

  return (
    <>
      <div style={{ position: "relative" }} ref={refContainer} onBlur={handleOnBlur}>
        <input
          type="text"
          className={isSearch ? css(styles.textInput) : css(styles.showNone)}
          value={searchKey}
          name="search"
          ref={refInput}
          onChange={(e) => handleInputChange(e)}
          onKeyDown={handleInputKeyDown}
        />

        <img
          src={img_close}
          alt="close"
          className={isSearch ? css([styles.imgClose]) : css(styles.showNone)}
          onClick={e => handleClose(e)}
        />
        <img
          src={img_search}
          alt="search"
          className={isSearch ? css([styles.imgSearch]) : css(styles.showNone)}
          onClick={e => handleSearch(e)}
        />

        <img onClick={handleShow} src={img_search} alt="search" className={isSearch ? css(styles.showNone) : css([styles.imgSearchShow])} />
      </div>

    </>

  );
}