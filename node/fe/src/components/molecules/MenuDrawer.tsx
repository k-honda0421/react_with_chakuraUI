import React, { memo, VFC } from "react";
import { Drawer, DrawerOverlay, DrawerContent, DrawerBody, Button } from "@chakra-ui/react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSet: () => void;
};

export const MenuDrawer: VFC<Props> = memo((props) => {
  const { isOpen, onClose, onClickHome, onClickUserManagement, onClickSet } = props;

  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button w="100%" onClick={onClickHome}>TOP</Button>
            <Button w="100%" onClick={onClickUserManagement}>ユーザー一覧</Button>
            <Button w="100%" onClick={onClickSet}>設定</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
