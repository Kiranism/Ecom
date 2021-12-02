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

const Info = styled.div``;

const Circle = styled.div``;

const Title = styled.h1``;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div``;

const ProductItem = ({ item }) => {
  return (
    <Container>
      <Circle />

      <Info>
        <Icon>
          <Image src={item.img} />
          <Title>{item.title}</Title>
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
