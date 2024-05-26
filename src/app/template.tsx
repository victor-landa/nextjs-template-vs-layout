'use client'

import { usePathname } from 'next/navigation'

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  /**
   * Quick reminder:
   * This component can also be a Server Component, it's defined as Client Component
   * because we are importing usePathName and in order to use hooks we have to declare it
   * as client component.
   */

  return (
    <div className='animate-appear p-4'>
      <pre className='inline-block bg-muted px-2 py-1 rounded-lg'>
        {pathname}
      </pre>
      {children}
    </div>
  )
}
