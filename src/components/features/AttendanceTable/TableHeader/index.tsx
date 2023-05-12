import HeaderTitle from '../HeaderTitle'

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <HeaderTitle />
        <HeaderTitle>월</HeaderTitle>
        <HeaderTitle>화</HeaderTitle>
        <HeaderTitle>수</HeaderTitle>
        <HeaderTitle>목</HeaderTitle>
        <HeaderTitle>금</HeaderTitle>
      </tr>
    </thead>
  )
}

export default TableHeader
