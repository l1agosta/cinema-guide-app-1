import './ReviewCard.css';

export function ReviewCard() {
    return (
        <div className="review-container my-5">
            <div className="review d-flex gap-3">
                <div className="p-2">
                    <p className="avatar-review">
                        ВС
                    </p>
                </div>
                <div className="d-flex align-items-center p-2">
                    <div className="user-data-review">
                        <h4 className="m-0">Владимир Селиванов</h4>
                        <p className="pt-2 date-review">12.05.2023</p>
                    </div>
                </div>
                <div className="ms-auto p-2 rating-film-user pe-5 d-flex align-items-center">10</div>
            </div>
            <p className="text-review p-2">Крутой фильмец внатуре</p>
        </div>
    )
}