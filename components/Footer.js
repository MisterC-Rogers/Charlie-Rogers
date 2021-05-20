import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <p>Copyright 2021 built by BitLion LLC</p>
            </div>
            <style jsx>{`
                .footer {
                    background: #111;
                    color: #bbb;
                    padding: 1px;
                    text-align: center;
                    margin-top: auto
                } 
            `}</style>
        </>
    )
}

export default Footer
