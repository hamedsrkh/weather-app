import styled, { css } from 'styled-components'
import Layout from 'src/theme/base/layout'
const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: ${Layout.BREAKPOINT.SM}px) {
    max-width: 480px;
  }

  @media (min-width: ${Layout.BREAKPOINT.MD}px) {
    max-width: 768px;
  }

  @media (min-width: ${Layout.BREAKPOINT.LG}px) {
    max-width: 1200px;
  }
`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  & > * {
    box-sizing: border-box;
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
  }
`

const getColumnWidth = (col: number, totalColumns = Layout.COLUMNS) =>
  col ? (col / totalColumns) * 100 : 100

const Column = styled.div<{ $col?: { LG?: number; MD?: number; SM?: number } }>`
  position: relative;
  padding: 0 15px;
  min-height: 1px;
  margin-bottom: 1rem;

  ${({ $col, theme: { Layout } }) =>
    $col?.SM &&
    css`
      @media (min-width: ${Layout.BREAKPOINT.SM}px) {
        flex: 0 0 auto;
        width: ${getColumnWidth($col?.SM)}%;
      }
    `}

  ${({ $col, theme: { Layout } }) =>
    $col?.MD &&
    css`
      @media (min-width: ${Layout.BREAKPOINT.MD}px) {
        flex: 0 0 auto;
        width: ${getColumnWidth($col?.MD)}%;
      }
    `}

  ${({ $col, theme: { Layout } }) =>
    $col?.LG &&
    css`
      @media (min-width: ${Layout.BREAKPOINT.LG}px) {
        flex: 0 0 auto;
        width: ${getColumnWidth($col?.LG)}%;
      }
    `}
`

export { Container, Row, Column }
