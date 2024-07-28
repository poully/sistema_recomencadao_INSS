'use client'

import React, { useEffect } from 'react'


export default function ReportPage() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.print();
        }
    }, []);
    return (
        <div>
            <h1>Report</h1>
        </div>
    )
}