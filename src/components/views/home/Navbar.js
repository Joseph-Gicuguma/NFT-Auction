import './css/style.css';
import './css/style.css.map';
import { useContext } from 'react';
import { MainAppContext } from '../../../context/MainAppContext';

const Navbar = () => {
    const { connectWallet } = useContext(MainAppContext);
    const { account } = useContext(MainAppContext);
    const {accountBal} = useContext(MainAppContext);
    return (
        <header class="header bg-white10">
            <div class="container">
                <a href="#" class="logo bold white"><span class="lightpurple">N</span>ar<span class="lightpurple">F</span>ke<span class="lightpurple">T</span></a>

                <div class="menu">
                    <form action="" class="search-form">
                        <label for="search-box" class="fas fa-search"></label>
                        <input type="search" id="search-box" placeholder="Search items and collections" />
                    </form>
                    <a href="#collections">Collections</a>
                    <a href="#featured">Featured</a>
                    <a href="#faq">FAQ</a>
                    {
                        (account == undefined || account == null)
                            ? (
                                <button class="btn bg-purple wallet" onClick={connectWallet}>
                                    Connect Wallet
                                </button>
                            )
                            : (
                                <div>
                                    <span className="size2 font-bold">Balance: </span><span className='size2'>{accountBal}</span><span className=" size2"> ALGO</span>
                                </div>
                            )
                    }
                </div>

                <div class="fas fa-wallet" id="wallet"></div>
                <div class="fas fa-bars" id="bar"></div>
            </div>
        </header>
    )
}

export default Navbar;