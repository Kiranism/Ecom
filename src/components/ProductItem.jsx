import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 5px;
`;

const Circle = styled.div``;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Info = styled.div``;

const Icon = styled.div``;

const ProductItem = (item) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default ProductItem;
