import { useBlockProps, RichText } from "@wordpress/block-editor";
import "./previous.css";

export default function save({ attributes }) {
  const blockProps = useBlockProps.save();

  return (
    <div {...blockProps}>
      <article data-testid="previous-game" className="previous-game">
        <div className="previous-game__header">
          <div className="previous-game__headerLabel">{attributes.date}</div>
          <div className="previous-game__homeAway">{attributes.homeAway}</div>
        </div>
        <div className="previous-game__content">
          <figure className="previous-game__crest">
            {attributes.imageURL && (
              <img src={attributes.imageURL} alt="Team Image" />
            )}
          </figure>

          <div className="previous-game__info">
            <div className="previous-game__team">
              <div className="previous-game__teamName">
                <RichText.Content
                  value={attributes.homeTeamName}
                  tagName="div"
                />
              </div>
              <div className="previous-game__score">
                <RichText.Content value={attributes.homeTeamScore} />
              </div>
            </div>
            <div className="previous-game__team">
              <div className="previous-game__teamName">
                <RichText.Content value={attributes.awayTeamName} />
              </div>
              <div className="previous-game__score">
                <RichText.Content value={attributes.awayTeamScore} />
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
