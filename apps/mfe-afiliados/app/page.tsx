import { redirect } from 'next/navigation';
import type { ReactNode } from 'react';

export default function ZoneHomePage(): ReactNode {
  redirect('/afiliados');
}