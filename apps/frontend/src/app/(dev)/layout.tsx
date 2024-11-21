import Pagina from '@/components/template/Pagina';
import React from 'react';

export type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout(props: LayoutProps) {
  return <Pagina>{props.children}</Pagina>;
}
