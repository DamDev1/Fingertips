import React from 'react'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import PercentIcon from '@mui/icons-material/Percent';
import WidgetsIcon from '@mui/icons-material/Widgets';
import "./Sidebar.scss"

export default function Sidebar() {
    return (
        <div className='sidebar-container'>
            <div className="sidebar-link">
                <div className="icon">
                    <PercentIcon />
                </div>
                <div className="link">
                    <span>Deal</span>
                    <div>
                        <ChevronRightOutlinedIcon />
                    </div>
                </div>
            </div>

            <div className="sidebar-link">
                <div className="icon"></div>
                <div className="link">
                    <span>Home & Garden</span>
                    <div>
                        <ChevronRightOutlinedIcon />
                    </div>
                </div>
            </div>

            <div className="sidebar-link">
                <div className="icon"></div>
                <div className="link">
                    <span>Phone</span>
                    <div>
                        <ChevronRightOutlinedIcon />
                    </div>
                </div>
            </div>

            <div className="sidebar-link">
                <div className="icon"></div>
                <div className="link">
                    <span>Laptops</span>
                    <div>
                        <ChevronRightOutlinedIcon />
                    </div>
                </div>
            </div>

            <div className="sidebar-link">
                <div className="icon"></div>
                <div className="link">
                    <span>Fashion</span>
                    <div>
                        <ChevronRightOutlinedIcon />
                    </div>
                </div>
            </div>

            <div className="sidebar-link">
                <div className="icon"></div>
                <div className="link">
                    <span>Cars</span>
                    <div>
                        <ChevronRightOutlinedIcon />
                    </div>
                </div>
            </div>

            <div className="sidebar-link">
                <div className="icon"></div>
                <div className="link">
                    <span>Toys</span>
                    <div>
                        <ChevronRightOutlinedIcon />
                    </div>
                </div>
            </div>

            <div className="sidebar-link">
                <div className="icon all">
                    <WidgetsIcon />
                </div>
                <div className="link">
                    <span>All Categories</span>
                    <div>
                        <ChevronRightOutlinedIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}
