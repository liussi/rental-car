import styled from 'styled-components';

// Створіть стилізований компонент за допомогою styled.div, styled.button, тощо.
export const CardWrapper = styled.article`
position: relative;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  width: 274px; // Задайте фіксовану ширину для кожної картки
  box-sizing: border-box; // Додайте це, щоб врахувати padding у ширині
  border-radius: 10px; // Закругліть кути

  @media screen and (max-width: 1096px) {
    width: 100%; // Змініть ширину на 100% при розширенні екрану менше 1096px
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column; // Змініть на flex-direction: column для відображення елементів вертикально
  align-items: center; // Це для вирівнювання елементів по центру
`;
export const Icon = styled.svg`
  position: absolute;
  z-index: 100;
  right: 14px;
  top: 14px;
  width: 24px;
  height: 24px;
  transition-duration: 250ms;
   stroke: black;
  fill: black;
  cursor: pointer;
`;
export const CardImage = styled.img`
  width: 100%; // Задайте ширину 100% для респонсивності
  max-height: 288px; // Задайте максимальну висоту, щоб фото не було вищим за 288px
  border-radius: 10px; // Закругліть кути
  object-fit: cover; // Зберігайте пропорції і обрізайте, щоб фото вміщувалося
`;

export const CardTitle = styled.h2`
  color: #333;
  margin-top: 10px; // Додайте відступ для відображення заголовка від верху фото
`;

export const CardInfo = styled.p`
  color: #666;
`;

export const CardButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin-top: 10px; // Додайте відступ для відображення кнопки від нижньої частини фото
`;

