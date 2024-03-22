import {
  MediaUpload,
  MediaUploadCheck,
  RichText,
  useBlockProps,
} from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import "./previous.css";

export default function Edit({ attributes, setAttributes }) {
  const blockProps = useBlockProps();

  const onChangeHomeTeamName = (value) => {
    setAttributes({ homeTeamName: value });
  };

  const onChangeHomeTeamScore = (value) => {
    setAttributes({ homeTeamScore: value });
  };

  const onChangeAwayTeamName = (value) => {
    setAttributes({ awayTeamName: value });
  };

  const onChangeAwayTeamScore = (value) => {
    setAttributes({ awayTeamScore: value });
  };

  const onChangeHomeAway = (value) => {
    setAttributes({ homeAway: value });
  };

  const onChangeDate = (value) => {
    setAttributes({ date: value });
  };

  const onSelectImage = (media) => {
    console.log(media.url);
    setAttributes({ imageURL: media.url });
  };

  return (
    <div {...blockProps}>
      <article data-testid="previous-game" className="previous-game">
        <div className="previous-game__header">
          <div className="previous-game__headerLabel">
            <RichText
              onChange={onChangeDate}
              allowedFormats={[]}
              value={attributes.date}
              placeholder="dd/mm/yyyy"
            />
          </div>
          <div className="previous-game__homeAway">
            <RichText
              onChange={onChangeHomeAway}
              allowedFormats={[]}
              value={attributes.homeAway}
              placeholder="Home or away?"
            />
          </div>
        </div>
        <div className="previous-game__content">
          <figure className="previous-game__crest">
            <MediaUploadCheck>
              <MediaUpload
                onSelect={onSelectImage}
                type="image"
                value={attributes.imageURL}
                render={({ open }) => (
                  <>
                    {!attributes.imageURL && (
                      <Button onClick={open}>Upload Image</Button>
                    )}
                    {attributes.imageURL && (
                      <img src={attributes.imageURL} alt="Team Image" />
                    )}
                  </>
                )}
              />
            </MediaUploadCheck>
          </figure>

          <div className="previous-game__info">
            <div className="previous-game__team">
              <div className="previous-game__teamName">
                <RichText
                  onChange={onChangeHomeTeamName}
                  allowedFormats={["core/bold"]}
                  value={attributes.homeTeamName}
                  placeholder="Write team name"
                />
              </div>
              <div className="previous-game__score">
                <RichText
                  onChange={onChangeHomeTeamScore}
                  allowedFormats={["core/bold"]}
                  value={attributes.homeTeamScore}
                  placeholder="0"
                />
              </div>
            </div>
            <div className="previous-game__team">
              <div className="previous-game__teamName">
                <RichText
                  onChange={onChangeAwayTeamName}
                  allowedFormats={["core/bold"]}
                  value={attributes.awayTeamName}
                  placeholder="Write team name"
                />
              </div>
              <div className="previous-game__score">
                <RichText
                  onChange={onChangeAwayTeamScore}
                  allowedFormats={["core/bold"]}
                  value={attributes.awayTeamScore}
                  placeholder="0"
                />
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
